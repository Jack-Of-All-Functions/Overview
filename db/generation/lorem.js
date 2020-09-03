// This file randomly selects lorem characters in order to rapidly build out fake data.

const loremString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat incidunt nulla culpa commodi velit iste libero, ullam placeat soluta cupiditate excepturi labore tenetur aspernatur harum in illo ipsum consequuntur distinctio tempora mollitia eius blanditiis maxime nisi. Ab excepturi odit autem vitae repellat, harum odio eius molestiae suscipit quibusdam beatae, sint eligendi. Rerum, eligendi blanditiis aliquam eaque, animi fuga corporis perspiciatis veniam totam harum esse, velit nulla nostrum sint ullam natus quisquam ex earum. Explicabo perspiciatis atque cupiditate, nesciunt, nostrum ex hic delectus quia et debitis nisi quidem magni! Corrupti velit tempore culpa nemo ratione repudiandae accusantium debitis, modi eaque.`;

const lorem = loremString.split(' ');

module.exports = (totalWords) => {
  // Create an array of words filled with random entries from lorem
  const words = new Array(totalWords).fill(null).map(() => {
    const index = Math.floor(Math.random() * lorem.length);
    return lorem[index];
  });

  // Join and return as a string
  return words.join(' ');
}
