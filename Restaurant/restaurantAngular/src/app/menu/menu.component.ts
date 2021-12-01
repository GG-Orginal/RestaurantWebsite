import {Component, OnInit} from '@angular/core';
import {get} from 'scriptjs';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {MenuItem} from "../model/MenuItem";
import {MenuService} from "../service/menu.service";

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: Array<MenuItem> = [];

  constructor(private http: HttpClient, private menuService: MenuService) {
  }

  ngOnInit(): void {
    get("https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js", () => {
      //library has been loaded...
    });
    this.getAllMenuItems();
  }

  loadFilter(filter: String, $event: { target: any; }) {
    var $container = $('.portfolioContainer');
    var $filter = $('#filter');
    $container.isotope({
      filter: '*',
      layoutMode: 'masonry',
      animationOptions: {
        duration: 750,
        easing: 'linear'
      }
    });
    console.log("click")
    var selector = filter;
    console.log(selector)
    $filter.find('a').removeClass('active');
    let clickedElement = $event.target || $event.target;
    let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
    // if a Button already has Class: .active
    if (isCertainButtonAlreadyActive) {
      isCertainButtonAlreadyActive.classList.remove("active");
    }
    clickedElement.className += " active";
    $container.isotope({
      filter: selector,
      animationOptions: {
        animationDuration: 750,
        easing: 'linear',
        queue: false,
      }
    });
  }

  getAllMenuItems(): void {
    this.menuService.getAllMenuItems().subscribe(
      (response: MenuItem[]) => {
        this.menuItems = response;
      }, (error: HttpResponse<any>) => {
        alert(error.body.message());
      });
  }

}
