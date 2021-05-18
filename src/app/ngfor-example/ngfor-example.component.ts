import {Component} from '@angular/core';


export interface Productos{
  id_producto: number,
  nombre: string,
  id_categoria: number,
  codigo_barras: string,
  precio_venta: number,
  cantidad_stock: number,
  estado: boolean
}

const DATA: Productos[] =  [
{"id_producto":1,"nombre":"Guayaba Feijoa","id_categoria":1,"codigo_barras":"7029 A42 23","precio_venta":300.00,"cantidad_stock":500,"estado":true},
{"id_producto":2,"nombre":"Mango","id_categoria":1,"codigo_barras":"0316 R56 01","precio_venta":2100.00,"cantidad_stock":250,"estado":true},
{"id_producto":3,"nombre":"Manzana","id_categoria":1,"codigo_barras":"7923 T23 19","precio_venta":700.00,"cantidad_stock":130,"estado":true},
{"id_producto":4,"nombre":"Aguacate","id_categoria":1,"codigo_barras":"9322 Q33 02","precio_venta":2500.00,"cantidad_stock":98,"estado":true},
{"id_producto":5,"nombre":"Lechuga","id_categoria":1,"codigo_barras":"9742 S22 21","precio_venta":4000.00,"cantidad_stock":86,"estado":true},
{"id_producto":6,"nombre":"Tomate","id_categoria":1,"codigo_barras":"0483 R00 97","precio_venta":290.00,"cantidad_stock":430,"estado":true},
{"id_producto":7,"nombre":"Pera","id_categoria":1,"codigo_barras":"9999 X10 01","precio_venta":750.00,"cantidad_stock":210,"estado":true},
{"id_producto":8,"nombre":"Apio","id_categoria":1,"codigo_barras":"3390 F29 45","precio_venta":150.00,"cantidad_stock":115,"estado":true},
{"id_producto":9,"nombre":"Papaya","id_categoria":1,"codigo_barras":"5291 J34 32","precio_venta":4500.00,"cantidad_stock":73,"estado":true},
{"id_producto":10,"nombre":"Limón","id_categoria":1,"codigo_barras":"7886 N18 32","precio_venta":350.00,"cantidad_stock":425,"estado":true},
{"id_producto":11,"nombre":"Brownie","id_categoria":2,"codigo_barras":"6683 H15 20","precio_venta":2500.00,"cantidad_stock":80,"estado":true},
{"id_producto":12,"nombre":"Pan tajado","id_categoria":2,"codigo_barras":"5745 F05 47","precio_venta":4500.00,"cantidad_stock":120,"estado":true},
{"id_producto":13,"nombre":"Torta","id_categoria":2,"codigo_barras":"3831 D97 99","precio_venta":10000.00,"cantidad_stock":35,"estado":true},
{"id_producto":14,"nombre":"Tortilla","id_categoria":2,"codigo_barras":"4335 Z33 84","precio_venta":6400.00,"cantidad_stock":87,"estado":true},
{"id_producto":15,"nombre":"Tostadas","id_categoria":2,"codigo_barras":"6584 M19 25","precio_venta":4000.00,"cantidad_stock":45,"estado":true},
{"id_producto":16,"nombre":"Chocorramo","id_categoria":2,"codigo_barras":"4487 S00 97","precio_venta":2000.00,"cantidad_stock":105,"estado":true},
{"id_producto":17,"nombre":"Salmón","id_categoria":3,"codigo_barras":"4546 A00 01","precio_venta":28000.00,"cantidad_stock":55,"estado":true},
{"id_producto":18,"nombre":"Punta de anca","id_categoria":3,"codigo_barras":"3678 E57 22","precio_venta":12000.00,"cantidad_stock":32,"estado":true},
{"id_producto":19,"nombre":"Posta","id_categoria":3,"codigo_barras":"8893 O01 03","precio_venta":7800.00,"cantidad_stock":40,"estado":true},
{"id_producto":20,"nombre":"Costilla de cerdo","id_categoria":3,"codigo_barras":"4534 Q12 88","precio_venta":8600.00,"cantidad_stock":70,"estado":true},
{"id_producto":21,"nombre":"Tilapia","id_categoria":3,"codigo_barras":"5684 R53 02","precio_venta":17000.00,"cantidad_stock":60,"estado":true},
{"id_producto":22,"nombre":"Merluza","id_categoria":3,"codigo_barras":"3523 R04 00","precio_venta":23000.00,"cantidad_stock":45,"estado":true},
{"id_producto":23,"nombre":"Leche de vaca","id_categoria":4,"codigo_barras":"2323 T56 33","precio_venta":2500.00,"cantidad_stock":500,"estado":true},
{"id_producto":24,"nombre":"Queso","id_categoria":4,"codigo_barras":"7786 K19 56","precio_venta":4000.00,"cantidad_stock":300,"estado":true},
{"id_producto":25,"nombre":"Huevos de gallina feliz","id_categoria":4,"codigo_barras":"3478 M74 01","precio_venta":400.00,"cantidad_stock":1000,"estado":true},
{"id_producto":26,"nombre":"Clara de huevo","id_categoria":4,"codigo_barras":"7932 R31 46","precio_venta":3200.00,"cantidad_stock":200,"estado":true},
{"id_producto":27,"nombre":"Suero costeño","id_categoria":4,"codigo_barras":"5463 W23 33","precio_venta":9000.00,"cantidad_stock":110,"estado":true},
{"id_producto":28,"nombre":"Agua","id_categoria":5,"codigo_barras":"8965 I32 11","precio_venta":2000.00,"cantidad_stock":600,"estado":true},
{"id_producto":29,"nombre":"Jugo de naranja","id_categoria":5,"codigo_barras":"7445 T87 44","precio_venta":7400.00,"cantidad_stock":200,"estado":true},
{"id_producto":30,"nombre":"Gaseosa Colombiana","id_categoria":5,"codigo_barras":"3434 R34 63","precio_venta":3100.00,"cantidad_stock":175,"estado":true},
{"id_producto":31,"nombre":"Jugo de Lulo","id_categoria":5,"codigo_barras":"9753 W33 19","precio_venta":8250.00,"cantidad_stock":630,"estado":true},
{"id_producto":32,"nombre":"Tea","id_categoria":5,"codigo_barras":"9836 F35 69","precio_venta":1900.00,"cantidad_stock":450,"estado":true},
{"id_producto":33,"nombre":"Cerveza","id_categoria":6,"codigo_barras":"3432 G67 21","precio_venta":2100.00,"cantidad_stock":800,"estado":true},
{"id_producto":34,"nombre":"Tequila","id_categoria":6,"codigo_barras":"9529 E45 98","precio_venta":65000.00,"cantidad_stock":764,"estado":true},
{"id_producto":35,"nombre":"Ron","id_categoria":6,"codigo_barras":"1947 R07 53","precio_venta":55000.00,"cantidad_stock":240,"estado":true},
{"id_producto":36,"nombre":"Aguardiente Antioqueño","id_categoria":6,"codigo_barras":"3160 A54 94","precio_venta":40000.00,"cantidad_stock":480,"estado":true},
{"id_producto":37,"nombre":"Vino","id_categoria":6,"codigo_barras":"7891 W46 95","precio_venta":82000.00,"cantidad_stock":560,"estado":true},
{"id_producto":38,"nombre":"Crema dental","id_categoria":7,"codigo_barras":"6310 C99 73","precio_venta":7500.00,"cantidad_stock":200,"estado":true},
{"id_producto":39,"nombre":"Jabón de manos","id_categoria":7,"codigo_barras":"9371 J14 75","precio_venta":4900.00,"cantidad_stock":90,"estado":true},
{"id_producto":40,"nombre":"Enjuague bucal","id_categoria":7,"codigo_barras":"1942 T68 01","precio_venta":12000.00,"cantidad_stock":105,"estado":true},
{"id_producto":41,"nombre":"Shampoo","id_categoria":7,"codigo_barras":"6789 W01 23","precio_venta":9300.00,"cantidad_stock":200,"estado":true},
{"id_producto":42,"nombre":"Desodorante","id_categoria":7,"codigo_barras":"7333 S21 36","precio_venta":6900.00,"cantidad_stock":85,"estado":true},
{"id_producto":43,"nombre":"Arroz","id_categoria":8,"codigo_barras":"4676 I83 00","precio_venta":3500.00,"cantidad_stock":600,"estado":true},
{"id_producto":44,"nombre":"Lentejas","id_categoria":8,"codigo_barras":"7333 S21 36","precio_venta":3000.00,"cantidad_stock":560,"estado":true},
{"id_producto":45,"nombre":"Harina","id_categoria":8,"codigo_barras":"7333 S21 36","precio_venta":1800.00,"cantidad_stock":300,"estado":true},
{"id_producto":46,"nombre":"Sal","id_categoria":8,"codigo_barras":"7333 S21 36","precio_venta":1400.00,"cantidad_stock":500,"estado":true},
{"id_producto":47,"nombre":"Aceite","id_categoria":8,"codigo_barras":"7333 S21 36","precio_venta":6500.00,"cantidad_stock":135,"estado":true},
{"id_producto":48,"nombre":"Cereal","id_categoria":8,"codigo_barras":"4673 K53 98","precio_venta":7000.00,"cantidad_stock":75,"estado":true},
{"id_producto":49,"nombre":"Frijol","id_categoria":8,"codigo_barras":"2745 F40 45","precio_venta":8200.00,"cantidad_stock":270,"estado":true},
{"id_producto":50,"nombre":"Café","id_categoria":8,"codigo_barras":"6351 R33 92","precio_venta":7200.00,"cantidad_stock":400,"estado":true},
];


@Component({
  selector: 'app-ngfor-example',
  templateUrl: './ngfor-example.component.html',
  styleUrls: ['./ngfor-example.component.css']
})
export class NgforExampleComponent {
  displayedColumns: string[] = ['nombre', 'codigo_barras', 'precio_venta', 'cantidad_stock','estado'];
  dataSource = DATA;

  constructor(){ }

}
