import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Books {
    const book = new Books('Достоєвський Федір Михайлович','Злочин і кара',1866,350,false,'Роман класика російської літератури, створений у жанрі інтелектуального детективу, є визнаним шедевром світового красного письменства. Перекладений практично всіма мовами світу, твір великого романіста був геніальним і суворим пророцтвом - точним психологічним портретом "людини майбутньго", здатної на свідомий злочин в ім\'я химерних ідей. У XX столітті ця книга стала розрадою для людства, яке потерпало від людиноненависницьких ідеологій: адже автор стверджує кінцеву перемогу гуманізму. Нині, у XXI столітті, читач безперечно знайде новий ракурс прочитання шедевра Достоєвського. У цьому йому допоможуть стаття і докладний коментар сучасного дослідника.Для широкого кола читачів.');
    return book;
  }
}

export class Books{
  Author: string;
  Title: string;
  Year: Date;
  Price: number;
  NewEdition: boolean;
  ShortAbstract: string;
  constructor(Author, Title, Year, Price, NewEdition, ShortAbstract){
    this.Author = Author;
    this.Title = Title;
    this.Year = Year;
    this.Price = Price;
    this.NewEdition = NewEdition;
    this.ShortAbstract = ShortAbstract;
  }
}
