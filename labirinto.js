
// Definindo o labirinto com o herói
const labirinto =
"##################################\n" +
"#    🚪                    x   ##\n" +
"#    ###   #####################\n" +
"#          #               ####### \n" +
"#    #   #   #############  ####\n" +
"#         #   #              ##\n" +
"#    #####   #   ###############\n" +
"#            #           ##    #\n" +
"#####   ##############   ##   #\n" +
"#       #     🏁   #   #   ######\n" +
"#       #       #   #   #    ## \n" +
"#       #       #   #   #   ### \n" +
"#       #########   #   #  #### \n" +
"#                     #   ###  \n" +
"#                     #   ###  \n" +
"########################## ####\n";

// Substituindo 'x' pelo emoticon do herói
const labirintoComHeroi = labirinto.replace('x', '😃');

// Substituindo '#' por rochas # 
const labirintoComRochas = labirintoComHeroi.replace(/#/g, '🪨');
// Exibindo o labirinto com o herói
console.log(labirintoComRochas);