import { inject, Injectable } from '@angular/core';
import { Firestore, collection, onSnapshot, doc, DocumentData } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DatabankService {
  firestore: Firestore = inject(Firestore);
/*   card: {
    assignedTo: [],
    category: string,
    date: Date,
    headliner: string,
    priority: string,
    subtasks:[],
    text: string
  }; */
  card:any

  cardData: any
  allCards:any[]= []


  
  unsub;
  constructor() {
    this.unsub = onSnapshot(this.getSingleRef('Join', 'CsMquSkemzl6W3yKoWyu'), (doc) =>{
     this.cardData =doc.data()
        
        this.card ={
          assignedTo: this.cardData['card']['assignedTo'],
          category: this.cardData['card']['category'],
          date: this.cardData['card']['date'],
          headliner: this.cardData['card']['headliner'],
          priority: this.cardData['card']['priority'],
          subtasks:this.cardData['card']['subtasks'],
          text: this.cardData['card']['text'],
          status:this.cardData['card']['status']
        }
        console.log('hat es geklappt?',this.card)
        this.allCards.push(this.card)
    })


   }

   getFirestoreRef(){
    return collection(this.firestore, 'Join')
   }

   getSingleRef(colId:string, docId:string){
    return doc(collection(this.firestore, colId), docId);
   }
}
