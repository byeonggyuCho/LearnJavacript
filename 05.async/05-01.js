function work(cb) {
  setTimeout(() => {
    const start = Data.now();

    for (let i = 0; i < 1000000000; i++) {}

    const end = Date.now();

    console.log(end - start + "ms");
    cb(end - start);
  }, 0);
}

console.log("start work!");
work((ms) => {
  console.log("work done", ms);
});

console.log("next work");
