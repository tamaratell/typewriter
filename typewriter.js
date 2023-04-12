const sentence = "hello there from lighthouse labs \n";

const animateTypewriter = (sentence) => {
  let delay = 0;
  for (const character of sentence) {
    delay += 50;
    setTimeout(() => {
      process.stdout.write(character);
    }, delay);
  };
};


console.log(animateTypewriter(sentence));