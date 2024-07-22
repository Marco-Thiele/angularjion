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
     console.log(this.cardData)
      for (let i = 0; i < this.cardData.allCards.length; i++) {
          let card = this.cardData.allCards[i]
          this.card ={
            assignedTo: card['card']['assignetTo'],
            category: card['card']['category'],
            date: card['card']['date'],
            headliner: card['card']['headliner'],
            priority: card['card']['priority'],
            subtasks:card['card']['subTasks'],
            text: card['card']['text'],
            status:card['card']['status']
          }
          this.allCards.push(this.card)
        }
        console.log('allCards',this.allCards) 
    
    })
    

   }

   getFirestoreRef(){
    return collection(this.firestore, 'Join')
   }

   getSingleRef(colId:string, docId:string){
    return doc(collection(this.firestore, colId), docId);
   }
}
