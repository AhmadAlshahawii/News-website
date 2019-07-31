import { Injectable } from '@angular/core';
import { NewsService } from './news.service'

@Injectable({
  providedIn: 'root'
})
export class NavService {

  currentCountryCode:string = "us";
  currentCategoryChoosen:string = "general";

  
  categories:any [] = ['GENERAL','BUSINESS','SPORTS','TECHNOLOGY','ENTERTAINMENT'];

  countries:any [] = 
  [
    {name:'Austria' , code:'au'},
    {name:'Brazil' , code:'br'},
    {name:'Canada' , code:'ca'},
    {name:'China' , code:'cn'},
    {name:'Egypt' , code:'eg'},
    {name:'France' , code:'fr'},
    {name:'India' , code:'in'},
    {name:'Italy' , code:'it'},
    {name:'Japan' , code:'jp'},
    {name:'Russia' , code:'ru'},
    {name:'Turkey' , code:'tr'},
    {name:'United States' , code:'us'},
  ];

  

  
 

  newsContainer:any[]=[];
  topNews:object[]=[];
  firstNews:object={};

  constructor( private _newsService:NewsService ) {

    
    
    this._newsService.getNews(this.currentCountryCode,this.currentCategoryChoosen).subscribe( myData =>{ 
      
      this.newsContainer = myData.articles;
    
      this.firstNews = this.newsContainer[0];
      
      for (let i=0;i<this.newsContainer.length;i++)
      {
        if(this.newsContainer[i].urlToImage == null || this.newsContainer[i].urlToImage == undefined )
        {
          this.newsContainer[i].urlToImage = "assets/placeholder.png";
        }
      }

      for (let i=1;i<3;i++)
      {
        this.topNews.push(this.newsContainer[i])
      }
    
    })



    
    
   }

   changeCode(c)
   {
     
    this.topNews = [];
    this.firstNews = {};
    this.currentCountryCode = c;


    this._newsService.getNews(this.currentCountryCode,this.currentCategoryChoosen).subscribe( myData =>{ 
      
      this.newsContainer = myData.articles;
    
      this.firstNews = this.newsContainer[0];
      
      for (let i=0;i<this.newsContainer.length;i++)
      {
        if(this.newsContainer[i].urlToImage == null || this.newsContainer[i].urlToImage == undefined )
        {
          this.newsContainer[i].urlToImage = "assets/placeholder.png";
        }
      }

      for (let i=1;i<3;i++)
      {
        this.topNews.push(this.newsContainer[i])
      }
    
    })

   }


   changeCategory(k) {
    
    this.topNews = [];
    this.firstNews = {};
    this.currentCategoryChoosen = k;


     this._newsService.getNews(this.currentCountryCode,this.currentCategoryChoosen).subscribe( myData =>{ 
      
      this.newsContainer = myData.articles;
    
      this.firstNews = this.newsContainer[0];
      
      for (let i=0;i<this.newsContainer.length;i++)
      {
        if(this.newsContainer[i].urlToImage == null || this.newsContainer[i].urlToImage == undefined )
        {
          this.newsContainer[i].urlToImage = "assets/placeholder.png";
        }
      }

      for (let i=1;i<3;i++)
      {
        this.topNews.push(this.newsContainer[i])
      }
    
    })
   }



}
