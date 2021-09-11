import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit{
  title = 'DigitalSolutions';
  splashScreen:boolean=false;
  constructor(private router:Router){}
  navLinks = [
    { path: 'home', label: 'Home' },
    { path: 'aboutus', label: 'About Us' },
    { path: 'contactus', label: 'Contact Us' },
  ];
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  ngOnInit(){
    setTimeout(() => {
      this.splashScreen=true
      
    }, 3000);
  }
  
  switchURL(page:any){
    if(page==='home'){
      this.router.navigateByUrl('/home');
    }else if(page==='aboutus'){
      this.router.navigateByUrl('/aboutus');
    }else if(page==='contactus'){
      this.router.navigateByUrl('/contactus');
    }
  }
}
