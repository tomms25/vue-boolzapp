const { createApp } = Vue;
createApp ({
  data (){
    return {
      cercaUtente: '',
      active: 0,
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: 'img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: 'img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: 'img/avatar_io.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: 'img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
      ]    
    }
  },

  methods: {
    userClick(i) {
      this.active = i;
    },
   
    addMessage(){
      this.contacts[this.active].messages.push(
        {
          date: '10/04/2020 17:51',
          message: this.newMessage,
          status: 'sent'
        });
        this.newMessage = '';
        
        setTimeout(() => {
          this.contacts[this.active].messages.push(
            {
              date: '10/04/2020 18:51',
              message: 'ok',
              status: 'received'
            });
          }, "1500")
    },
  },

  computed: {
    cercaNome(){
      if(this.cercaUtente) {
        return this.contacts.filter((user) => {
          return user.name.toLowerCase().includes(this.cercaUtente)
        });
        }
        else {
          return this.contacts;
        }
      }
    }
}).mount('#app')