"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
  albums: [
    {
      title: "Название альбома",
      artist: "Исполнитель",
      year: "Год выпуска",
    },
    {
      title: "Название альбома 2",
      artist: "Исполнитель 2",
      year: "Год выпуска 2",
    },
    {
      title: "Название альбома 3",
      artist: "Исполнитель 3",
      year: "Год выпуска 3",
    },
  ],
  [Symbol.iterator]() {
    return {
      currentIndex: 0,
      iterable: this.albums,
      next() {
        return this.currentIndex < this.iterable.length
          ? { value: this.iterable[this.currentIndex++], done: false }
          : { done: true };
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
