import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy {

  quantidade:number = 0

  constructor() { }


  adicionar(){
    this.quantidade += 1
  }
  decrementar(){
    this.quantidade -= 1
  }

  //checked => content => iniciado

  //quanto o primeiro conteudo é iniciado
  ngDoCheck(): void {
    console.log("NgDoCheck");
  }
  //depois da inicialização da view
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  //apos alguma alteracao, verifica o conteudo
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  //após alguma alteração veriica a view
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("goodbye my friend");
  }
}
