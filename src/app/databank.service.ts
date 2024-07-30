import { inject, Injectable } from '@angular/core';
import { Firestore, collection, onSnapshot, doc, addDoc, updateDoc } from '@angular/fire/firestore';


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
  allCard:any[]= []
  j:number = 0;

  
  unsub;
  constructor() {
    this.unsub = onSnapshot(this.getSingleRef('Join', 'CsMquSkemzl6W3yKoWyu'), (doc) =>{
        this.cardData =doc.data()
     console.log(this.cardData)
     this.allCard= [];
      for (let i = 0; i < this.cardData.allCards.length; i++) {
          let card = this.cardData.allCards[i]
          this.card ={
            assignedTo: card['assignetTo'],
            category: card['category'],
            date: card['date'],
            headliner: card['headliner'],
            priority: card['priority'],
            subtasks:card['subTasks'],
            text: card['text'],
            status:card['status']
          }
          this.allCard.push(this.card);
          this.j=i+1
        }
        console.log('allCards',this.allCard, this.j) 
    
    })
    

   }

   getFirestoreRef(){
    return collection(this.firestore, 'Join')
   }

   getSingleRef(colId:string, docId:string){
    return doc(collection(this.firestore, colId), docId);
   }

  async addCard(item:any){
    await updateDoc(this.getSingleRef('Join', 'CsMquSkemzl6W3yKoWyu'),item)
   }
}
