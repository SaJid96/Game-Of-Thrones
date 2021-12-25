import { Component ,OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './service/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';

  user:any;

  constructor(private userService:UserService,private toastr:ToastrService){}

  ngOnInit(): void {
    
    
    this.userService.getUser().subscribe(
      (user:any)=>{

        console.table(user);
        
        this.user=user;
      },

      (err)=>{

        this.toastr.error(err.status,"OOps")
      },
    )

        

  }

  reloadUser():void{

          this.userService.getUser().subscribe(


            (user:any)=>{
              this.user=user[0];
              this.toastr.info("New User Loaded")
                console.log(`NewUser :${user}`);
                
            },
            (err)=>{
              console.log(err);
              this.toastr.error("Something went wrong!!")
              
            }
          )
        }

}
