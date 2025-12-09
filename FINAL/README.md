# Personal Portfolio Website
## Step 1: Audioreactive Visuals with p5.js
### Stars Rejection
First of all, I started by deciding what I was going to use as audioreactive visuals for my website. I thought that it could be a great idea to use the figure I created for this class midterm. 
![MIDTERM STAR](phase45x5.png)
Nevertheless once I started getting along with how to manage audioreactive visuals with P5.js I started figuring out that using these stars wasn't really going to work out that good, and it would be really difficult considering the time limitation.

### Frequency Spectrum with p5.js
At the same time, I learned about a function that P5.js had, which was the p5.FFT (Fast Fourier Transform)[p5.FFT](https://p5js.org/reference/p5.sound/p5.FFT/). This basically analyzes audio and outputs a frequency spectrum for that audio. The first time I saw this in action I thought it was great. 

Also, I came across this example on how to use it with a mic as an audio input, which I thought it could be perfect for what I wanted. [p5.FFT Mic Input](https://editor.p5js.org/p5/sketches/Sound:_FFT_Spectrum). Simple, pretty, effective and I knew exactly how I wanted to use it. 

```
let mic, fft;

function setup() {
  createCanvas(710, 400);
  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(200);

  let spectrum = fft.analyze();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
}
```
### What should I do with the star??
Nevertheless, I didn't wanted to leave the star out of the website, so I decided it would be really cool to have it as the cursor for the website. In that way I wouldn't leave it out, and it would be interactive in some way. Also, it was just one line of code I will have to add to the css file later. ` cursor: url("cursor.png"), auto; `


## Step 2: Structuring the Website
### Basic Organization
For my website organization I tried to use my favorite websites as reference but they were so weirdly organized that it was almost impossible to even understand them. Nevertheless, what I wanted was simple; different pages, were each one displays the stuff I wanted it to be there. I thought that it would be great to have HOME / ABOUT / LISTEN / WATCH / CONTACT. Just the basics that would serve the purpose. For this I ended up basically using different html files. I haven't seen this on another webpage, and probably I'm making a totally unefficient move with this, but after a lot of trial and error it end up working. I just had to find a way I can have the user to navigate between pages with a simple yet effective menu. 

### Simple Yet Effective Menu Navigation
I had no clue how to do this menu navigation tool so I started investigating. I found this great thread in stack overflow that really helped me understand how to use it. [Stack Overflow Menu Navigation](https://stackoverflow.com/questions/79672575/how-can-i-add-a-responsive-toggle-button-for-a-mobile-nav-menu-using-javascript)

After lots of trial and error, and going in between the css file and the html, I ended up with a great navigation menu. I didn't know it was going to be that difficult. 
```
  <!-- menu dropdown -->
  <nav class="nav">
    <button class="nav-toggle">menu ▾</button>
    <ul class="nav-menu">
      <li><a href="index.html">home</a></li>
	  <li><a href="about.html">about</a></li>
      <li><a href="listen.html">listen</a></li>
      <li><a href="watch.html">watch</a></li>
      <li><a href="contact.html">contact</a></li>
    </ul>
  </nav>
```

### Rest of Website Content and Organization
The rest of the content of the website is pretty simple thanks to the class were we made our own website. Basically just inserting photos, videos, text, using dividers, headers, etc.
I knew I was going to have a bad time with the css file if I wanted the website look corporate-y. Which I also don't wanted it to look like that. So I went for a more DIY approach, using black and white (my favortite colores) and using the css style file only to place the content along the website. 

## Step 3: Final Details and Hosting p5.js Visuals
The most difficult step and a lot of debugging.
### Hosting the Visuals on the Website
I knew exactly how I wanted the visuals to sit in the website. It was pretty much similar to the code in the example, I just changed the color of the background to match mine, and the frequency spectrum too so that it made sense with the website style. Then, I read this thread that helped me understand how to call the sketch from the html I wanted it to be in [Stack Overflow - Canvas in html](https://stackoverflow.com/questions/35660240/how-to-put-p5-js-canvas-in-a-html-div). Honestly I had so much trial and error during this part. I think the most tedious part was to push my repository to test it, because when I opened it from the file it just showed a loading screen on the place of the visuals. Nevertheless after trying it up in github, I found out that it was working but it appeared in line with the text and teh content, but I wanted it to be in the background, and not interfere with the rest of the content that's on top of it. 

For this I knew it had to do with the `function setup` block of code, but had no clue on how to use it as background. I read this thread that helped me understand how to place it back [Stack Overflow - No Blocking Canvas](https://stackoverflow.com/questions/62255152/p5-js-render-canvas-on-top-of-html-elements-without-blocking-mouse-interactions). Specifically with the `z-index` and setting `pointer-events` to `none` I was able to come up with a block of code for `function setup` were the p5.js visuals would sit perfectly. 

This ended up being the code for the visuals:

```
let mic, fft;

function setup() {
    const c = createCanvas(windowWidth, windowHeight);
    c.position(0, 0);
    c.style("position", "fixed");
    c.style("z-index", "-1");
    c.style("pointer-events", "none");  
  
  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0);

  let spectrum = fft.analyze();

stroke(255);
  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
}
```

### Setting the custom cursor
Remember how I thought that the cursor was just one line of code... I just need to clarify that it is never that easy. I had to try so many different things because the custom cursor wasn't working until I read that there was a limit to the pixel size??? [Stack Overflow - Max Cursor Size](https://stackoverflow.com/questions/6648279/cursor-256x256-px-size). Well I guess it's good that it wasn't about my code. But after I tried it and worked, I figured that it was showing the star only when I hover it on top of pictures, letters, or random places. Honestly I thought that was cool, but I also didn't know what the problem was, so I just left it like that. 

### Final Details
After having both the cursor and the visuals I had to reorganize some content of the website so that they don't interfere with the frequency spectrum. These were basic movements, such as moving videos to the right side of the frame, or pushing the audios to be in line, instead of one on top of the other one. So only css style changes. 