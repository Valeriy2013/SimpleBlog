import { Component } from '@angular/core'
//import { ISession } from "../events/shared/index";
//import { EventService } from "../events/index";

@Component({
    templateUrl: 'app/nav/navbar.component.html',
    selector: 'nav-bar',
    styles: [
        `   .nav.navbar-nav {font-size: 15px;}
            #searchForm { margin-right: 100px;}
            @media (max-width:1200px) { #searchForm {display: none; }}
            li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent{
   // searchTerm: string = ""
   // foundSessions: ISession[]

  //  constructor(private auth:AuthService, private eventService: EventService) {    
  //  }

    // searchSessions(searchTerm) {
    //     this.eventService.searchSessions(searchTerm).subscribe(sessions => { this.foundSessions = sessions; 
    //     //console.log(this.foundSessions)
    //     })
    // }
}