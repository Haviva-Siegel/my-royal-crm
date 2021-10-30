import { Component, OnInit } from '@angular/core';

interface NavItem {
  icon: string;
  link: string;
  title: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  // sidenav component items
  navItems: NavItem[] = [
    {
      icon: 'bi bi-file-person',
      link: 'customers',
      title: 'customers',
    },
    {
      icon: 'bi bi-person-lines-fill',
      link: 'contacts',
      title: 'contacts',
    },
    {
      icon: 'bi bi-bookmark-star',
      link: 'leads',
      title: 'leads',
    },
    {
      icon: 'bi bi-archive',
      link: 'reports',
      title: 'reports',
    },
    {
      icon: 'bi bi-card-list',
      link: 'integrations',
      title: 'integrations',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
