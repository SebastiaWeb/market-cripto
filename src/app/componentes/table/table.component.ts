import { Component, OnInit, Input, ViewChild, Directive } from '@angular/core';
import { CriptoService } from 'src/app/service/exchange_criptomoneda.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [CriptoService]
})



export class TableComponent implements OnInit {
  
  
  @Input() item:string = '';
  
  public ELEMENT_DATA: any;
  public dataSource: any;
  displayedColumns: string[] = [];
  public data: string = "";
  public cripto_exchange:any;
  
  constructor(
    public _data: CriptoService,
    ) {

     
    }
    
    ngOnInit(): void {

      this.cripto_exchange = (this.item == 'true') ? true:false;

    if (this.cripto_exchange) {

      this.displayedColumns = ['market_cap_rank', 'name', 'current_price', 'market_cap_change_percentage_24h',
        'market_cap', 'total_volume', 'total_supply'];

      this._data.getCoins().subscribe(
        result => {
          this.dataSource = result
        },
        error => console.log(error)
      );

    } else{

      this.displayedColumns = ['trust_score_rank', 'name', 'trust_score', 'trade_volume_24h_btc',
        'country', 'year_established', 'url'];
        // console.log(this.displayedColumns)

      this._data.getExchange().subscribe(
        (result: any) => {
          this.dataSource = result
        },
        (error: any) => console.log(error)
      );

    }


  }


}


