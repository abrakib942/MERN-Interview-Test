import mongoose from 'mongoose';

const lineSchema = new mongoose.Schema({
  startX: Number,
  startY: Number,
  endX: Number,
  endY: Number,
  color: String,
  thickness: Number,
});

const shapeSchema = new mongoose.Schema({
  type: String, // 'rectangle', 'circle', etc.
  startX: Number,
  startY: Number,
  endX: Number,
  endY: Number,
  color: String,
  thickness: Number,
});

const textAnnotationSchema = new mongoose.Schema({
  text: String,
  x: Number,
  y: Number,
  color: String,
  fontSize: Number,
});

const drawingSchema = new mongoose.Schema({
  lines: [lineSchema],
  shapes: [shapeSchema],
  textAnnotations: [textAnnotationSchema],
  serializedData: String,
});

export const Drawing = mongoose.model('Drawing', drawingSchema);

// Sample Data
const sampleDrawing1 = {
  lines: [
    {
      startX: 10,
      startY: 10,
      endX: 50,
      endY: 50,
      color: 'black',
      thickness: 2,
    },
  ],
  shapes: [
    {
      type: 'rectangle',
      startX: 100,
      startY: 100,
      endX: 200,
      endY: 150,
      color: 'blue',
      thickness: 1,
    },
  ],
  textAnnotations: [
    { text: 'Hello World!', x: 30, y: 80, color: 'red', fontSize: 12 },
  ],
};

const sampleDrawing2 = {
  lines: [
    {
      startX: 30,
      startY: 20,
      endX: 90,
      endY: 60,
      color: 'purple',
      thickness: 2,
    },
    {
      startX: 70,
      startY: 50,
      endX: 120,
      endY: 80,
      color: 'green',
      thickness: 3,
    },
  ],
  shapes: [
    {
      type: 'circle',
      startX: 180,
      startY: 40,
      endX: 230,
      endY: 90,
      color: 'orange',
      thickness: 1,
    },
    {
      type: 'rectangle',
      startX: 270,
      startY: 30,
      endX: 340,
      endY: 80,
      color: 'pink',
      thickness: 2,
    },
  ],
  textAnnotations: [
    {
      text: 'Welcome to the Whiteboard!',
      x: 50,
      y: 150,
      color: 'blue',
      fontSize: 16,
    },
    { text: 'Explore and create!', x: 250, y: 180, color: 'red', fontSize: 14 },
  ],
};

Drawing.create(sampleDrawing1);
Drawing.create(sampleDrawing2);
