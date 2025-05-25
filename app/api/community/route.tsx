import { MongoClient, ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

interface Post {
  _id?: ObjectId;
  title: string;
  content: string;
  topic: string;
  author: string;
  timestamp: string;
  upvotes: number;
  replies: Reply[];
  flagged: boolean;
}

interface Reply {
  _id: ObjectId;
  content: string;
  author: string;
  timestamp: string;
  upvotes: number;
  flagged: boolean;
}

interface CreatePostRequest {
  title: string;
  content: string;
  topic: string;
  author: string;
  type: 'post';
}

interface CreateReplyRequest {
  content: string;
  author: string;
  type: 'reply';
  postId: string;
}

const MONGODB_URI = `mongodb+srv://razor1211:vivesh061@cluster0.wc4itr0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

let client: MongoClient | null = null
let isConnecting = false

async function connectToMongoDB(): Promise<MongoClient> {
  if (client) return client
  if (isConnecting) {
    // Wait for existing connection attempt
    while (isConnecting) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    if (!client) {
      throw new Error('Failed to connect to database')
    }
    return client
  }

  try {
    isConnecting = true
    client = await MongoClient.connect(MONGODB_URI)
    return client
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw new Error('Failed to connect to database')
  } finally {
    isConnecting = false
  }
}

export async function POST(request: Request) {
  try {
    console.log('Received POST request');
    const body = await request.json();
    console.log('Request body:', body);

    const { title, content, topic, author, type, postId } = body;

    // Validate required fields
    if (type === 'post') {
      if (!title?.trim()) {
        return NextResponse.json({ error: 'Title is required' }, { status: 400 });
      }
      if (!content?.trim()) {
        return NextResponse.json({ error: 'Content is required' }, { status: 400 });
      }
      if (!topic?.trim()) {
        return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
      }
      if (!author?.trim()) {
        return NextResponse.json({ error: 'Author is required' }, { status: 400 });
      }
    } else if (type === 'reply') {
      if (!content?.trim()) {
        return NextResponse.json({ error: 'Content is required' }, { status: 400 });
      }
      if (!author?.trim()) {
        return NextResponse.json({ error: 'Author is required' }, { status: 400 });
      }
      if (!postId?.trim()) {
        return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
      }
    } else {
      return NextResponse.json({ error: 'Invalid request type' }, { status: 400 });
    }

    console.log('Connecting to MongoDB...');
    const mongoClient = await connectToMongoDB();
    console.log('Connected to MongoDB');

    const db = mongoClient.db('zenzone');
    const collection = db.collection<Post>('posts');

    if (type === 'post') {
      const newPost: Post = {
        title,
        content,
        topic,
        author,
        timestamp: new Date().toISOString(),
        upvotes: 0,
        replies: [],
        flagged: false
      };

      console.log('Inserting new post:', newPost);
      const result = await collection.insertOne(newPost);
      
      if (!result.acknowledged) {
        console.error('Insert not acknowledged');
        throw new Error('Failed to insert post into database');
      }

      console.log('Post created successfully:', result.insertedId);
      const createdPost = {
        ...newPost,
        _id: result.insertedId
      };
      
      return NextResponse.json(createdPost);
    }

    if (type === 'reply') {
      const reply: Reply = {
        _id: new ObjectId(),
        content,
        author,
        timestamp: new Date().toISOString(),
        upvotes: 0,
        flagged: false
      };

      const result = await collection.findOneAndUpdate(
        { _id: new ObjectId(postId) },
        { $push: { replies: reply } },
        { returnDocument: 'after' }
      );

      if (!result) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }

      console.log('Reply added to post:', postId);
      return NextResponse.json(result);
    }

    return NextResponse.json({ error: 'Invalid request type' }, { status: 400 });
  } catch (error) {
    console.error('Detailed server error:', error);
    
    // Check if error is due to invalid ObjectId
    if (error instanceof Error && error.message.includes('ObjectId')) {
      return NextResponse.json({ error: 'Invalid post ID format' }, { status: 400 });
    }

    // Check if error is due to MongoDB connection
    if (error instanceof Error && error.message.includes('Failed to connect')) {
      return NextResponse.json({ error: 'Database connection failed' }, { status: 503 });
    }

    return NextResponse.json(
      { error: 'Database operation failed', details: (error as Error).message },
      { status: 503 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const mongoClient = await connectToMongoDB()
    const db = mongoClient.db('zenzone')
    const collection = db.collection<Post>('posts')

    const posts = await collection.find().sort({ timestamp: -1 }).toArray()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Community error:', error)
    return NextResponse.json(
      { error: 'Database operation failed', details: (error as Error).message },
      { status: 503 }
    )
  }
} 