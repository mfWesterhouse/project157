AFRAME.registerComponent("poster", {
    init: function () {
      this.placesContainer = this.el;
      
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "batman",
          title: "Batman",
          url: "./assets/batman_poster.jpg",
        },
        {
          id: "batgirl",
          title: "Batgirl",
          url: "./assets/batgirl_poster.jpeg",
        },
        {
          id: "wonder-woman",
          title: "Wonder Woman",
          url: "./assets/wonderwoman_poster.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    
  });