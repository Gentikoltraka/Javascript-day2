// 1.Build a simple function that displays a msg


function simple(){
    console.log("simple funcion", 
    );
}
 simple();

  //2.Build a function that greets someone by taking the Parametres as reference!!
  function Salut(name) {
    console.log("Hello ," + name);
   
  }
  Salut("good People!");
  //3.Build a function wich for any number we give the result is 5x bigger!!
  function Multiplyby5(nr) {
    const Multiplyby5 = nr * 5;
    return Multiplyby5;
  }
  
  const res = Multiplyby5(551);
  console.log("Rezultati", res);
  
  //4. Build a selector finction who for every number it gonna automaticly find the value wich coo-respond !
  function getMonthName(monthNr) {
    switch (monthNr) {
      case 6:
        return "June";
      case 7:
        return "July";
      case 12:
        return "December";
      default:
        return "The number given it doesnt Coorespond to any Month";
    }
  }
  
  console.log(getMonthName(5));
  