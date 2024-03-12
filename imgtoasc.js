// Dependências 
const  imageToAscii  =  require ( "image-to-ascii" ) ;

// O caminho pode ser um caminho local ou um url 
imageToAscii ( "https://octodex.github.com/images/octofez.png" ,  ( err ,  convert )  =>  { 
    console . log ( err  ||  convert ) ; 
} ) ;

// Passando opções 
imageToAscii ( "https://octodex.github.com/images/privateinvestocat.jpg" ,  { 
    colorido : false 
} ,  ( err ,  convertido )  =>  { 
    console . log ( err  ||  convertido ) ; 
} ) ;