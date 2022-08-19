# My Portfolio

You can view this website on mihad.net

## Libraries used:

I used MaterialUI as a template for most of the UI design. I used styled MaterialUI components and customized them accordingly. 
```
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@mui/icons-material": "^5.8.4",
    "@mui/material": "^5.10.1",
    "styled-components": "^5.3.5",
```
    
To render the open source low poly Earth model on the home page, I used three.js and other libraries that assisted with three.js. With these libraries I was able to allow the user to control the orbit of the 3D model and spin it around, and by default it would rotate on it's y-axis. I downloaded the model as a gltf file which I then used a tool to convert it to a useable JSX file.

```
    "@react-three/drei": "^9.22.7",
    "@react-three/fiber": "^8.3.1",
    "three": "^0.143.0",
    "gltf-pipeline": "^3.0.5",
```

To create the dynamic smooth scrolling on the page with navigation bar and the action buttons, I used the react-scroll library.
```
    "react-scroll": "^1.8.7",
```

For the fade-in animations as you scroll down, I used the 'aos' library which stands for 'appear on scroll'. This made it much easier to implement the fade in transitions for every individual object on the page. 
```
    "aos": "^2.3.4"
```
    
Tools I used:
- Figma
    - I created the template for the general design on Figma, and used it to make most of my decisions on implementations.
- CSSGradient
    - I got premade css background gradients from here so that I could easily decide which would suit my website best.
- Sketchfab
    - I was able to get the Earth model I used from here. The licensing and credits are given at the footer of the page.

Thanks to this portfolio project, I was able to vastly improve my front-end UI design and features. Following this portfolio, I know that I will be comfortable designing many websites of different nature. I hope to improve my UI design as well as the front-end interaction.
