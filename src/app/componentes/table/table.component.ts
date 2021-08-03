import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { CriptoService } from 'src/app/service/criptomoneda.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CriptoService]
})
export class TableComponent implements OnInit {

  public ELEMENT_DATA: any;
  public dataSource: any;
  public cripto: any;
  displayedColumns: string[] = [];
  public data: string = "";




  constructor(

    public _data: CriptoService

  ) {


    this.displayedColumns = ['market_cap_rank', 'name', 'current_price', 'market_cap_change_percentage_24h',
    'market_cap', 'total_volume', 'total_supply'];

    // this.dataSource = this._data.getData(result);
    this._data.getCoins().subscribe(
      result => {this.dataSource = result
      console.log(result)},
      error => console.log(error)
    );
  }

  ngOnInit(): void {

    const ELEMENT_DATA = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];

    // this.cripto = JSON.parse(this.cripto);
    console.log(this.cripto)

  }



}


