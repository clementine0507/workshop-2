# workshop-2
development
## URL
https://clementine0507.github.io/workshop-2/
### Notes

![1db59763e09713be6f77c7356580125](https://github.com/user-attachments/assets/43d47703-466e-405b-b461-a5b3da8ce630)

![bf673c6755512f6379b1dc91247aaf5](https://github.com/user-attachments/assets/0ea36d43-6a90-445b-9775-6bcf541b924c)

![82b3b0c9f9345c140462a9948b11766](https://github.com/user-attachments/assets/8003ef0d-f4a9-43a9-a8be-35f179f6eb53)

#### Processing

![1738166065121](https://github.com/user-attachments/assets/fc4cca21-da41-4712-a788-634459beb0d1)

· Based on Workshop 1, I used `setInterval(colorBalloons, 1000)` to execute the `colorBalloons` function every second, which updates the balloon count at regular intervals.
· I added `mousePressed`, which resets `balloonCount` and `counter` to 0 when the user clicks the mouse. This is done to restart the balloon generation process, rather than continuing to increase from the previous count.

New item

![image](https://github.com/user-attachments/assets/5f26d7e3-7ffd-41c5-8f31-047f01224fec)

example

let heart;

// Load a pixelated heart image from an image data string.
function preload() {
  heart = loadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IArs4c6QAAAEZJREFUGFd9jcsNACAIQ9tB2MeR3YdBMBBq8CIXPi2vBICIiOwkOedatllqWO6Y8yOWoyuNf1GZwgmf+RRG2YXr+xVFmA8HZ9Mx/KGPMtcAAAAASUVORK5CYII=');
}

function setup() {
  createCanvas(100, 100);

  background(50);

  // Antialiased hearts.
  image(heart, 10, 10);
  image(heart, 20, 10, 16, 16);
  image(heart, 40, 10, 32, 32);

  // Aliased hearts.
  noSmooth();
  image(heart, 10, 60);
  image(heart, 20, 60, 16, 16);
  image(heart, 40, 60, 32, 32);
}

###### reflection
I tried to add interactivity to the balloon based on an assignment, so I added the same functions as in Workshop 2. At first, my functions didn’t work, so I asked ChatGPT to help me check the code. The reason is that I hadn’t defined ‘balloonCount’.
