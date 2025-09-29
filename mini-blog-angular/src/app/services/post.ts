// src/app/services/post.service.ts
import { Injectable } from '@angular/core';

// Definiamo un'interfaccia per la tipizzazione del nostro oggetto Post
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    { id: 1, title: 'Introduzione ad Angular', content: 'Angular è un framework per la creazione di applicazioni web...', author: 'Mario Rossi' },
    { id: 2, title: 'Componenti e Template', content: 'In Angular, i componenti sono i mattoni fondamentali delle applicazioni...', author: 'Luigi Verdi' },
    { id: 3, title: 'Servizi e Dependency Injection', content: 'I servizi sono un ottimo modo per condividere dati e logica tra i componenti...', author: 'Anna Bianchi' },
    { id: 4, title: 'Routing in Angular', content: 'Il Router di Angular permette di navigare tra diverse viste...', author: 'Mario Rossi' },
    { id: 5, title: 'Gestione dei Form', content: 'Angular offre potenti strumenti per la gestione dei form, sia template-driven che reactive.', author: 'Giulia Neri' },
  ];

  constructor() { }

  // Metodo per ottenere tutti i post
  getPosts(): Post[] {
    return this.posts;
  }

  // Metodo per trovare un singolo post tramite ID
  getPostById(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }

  // Metodo per aggiungere un nuovo post
  addPost(post: Omit<Post, 'id'>) {
    const newPost: Post = {
      id: Date.now(),
      ...post
    };
    this.posts.unshift(newPost); // Aggiunge il nuovo post all'inizio dell'array
  }
}