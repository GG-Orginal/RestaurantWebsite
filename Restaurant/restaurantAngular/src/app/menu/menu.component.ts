import {Component, OnInit} from '@angular/core';
import {get} from 'scriptjs';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedItem: any;


  constructor() {
  }

  ngOnInit(): void {
    get("https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js", () => {
      //library has been loaded...
    });
  }

  load(filter: String, $event: { target: any; }) {
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


}
