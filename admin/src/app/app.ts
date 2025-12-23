import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/MainLayout/header/header";
import { Sidebar } from "./layouts/MainLayout/sidebar/sidebar";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, Sidebar],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('admin');
}
