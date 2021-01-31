{
  /**
   * Global, Function, Block
   */

  const value = "Global Scope";

  function myFunction() {
    console.log("myFunction");
    console.log(value);
  }

  function otherFunction() {
    console.log("other function");
    const value = "Functoin Scope";
    console.log(value);

    if (true) {
      const value = "Block Scope";
      console.log(value);
    }
  }

  myFunction();
  otherFunction();
}
