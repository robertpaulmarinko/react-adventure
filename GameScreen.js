import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image } from 'react-native';

export class GameScreen extends React.Component {
    render() {
      const mapElements = [
        { x: 0, y: 0, type: "s" },
        { x: 1, y: 0, type: "s"  },
        { x: 2, y: 0, type: "s"  },
        { x: 3, y: 0, type: "s"  },
        { x: 0, y: 1, type: "b"  },
        { x: 0, y: 2, type: "b" },
        { x: 0, y: 3, type: "b" },  
      ];
      const mapElementsHTML = mapElements.map((mapElement) => {
        const left = mapElement.x * 20;
        const top = mapElement.y * 20;
        const key = mapElement.x.toString() + "-" + mapElement.y.toString();
        let image = "";
        switch(mapElement.type) {
          case "s":
            image = require("./images/stone-wall.png");
            break;
          case "b":
            image = require("./images/brick-wall.png");
            break;
          default:
            image = require("./images/stone-wall.png");
            break;
          }

        return (
          <Image
            key={key}
            style={{position: "absolute", left: left, top: top, height: 20, width: 20}}
            source={image}
          />
        )
      });      
      return (
        <View>
          {mapElementsHTML}
        </View>
      );
    }
  }
  