package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/Owicca/ws/models"

	"github.com/gorilla/websocket"
)

func main() {
	http.HandleFunc("/api/ws/", wsInit)

	log.Println("started")
	log.Fatal(http.ListenAndServe(":9000", nil))
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func wsInit(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Error while init-ing ws: ", err)
		return
	}
	log.Println("opening")

	conn.SetCloseHandler(func(code int, text string) error {
		log.Println("closing")
		conn.Close()
		return nil
	})

	for {
		msg := new(models.Message)
		if err = conn.ReadJSON(msg); err != nil {
			log.Println("Error while reading message: ", err)
			return
		}

		msg.Content = fmt.Sprintf("Response: %s", msg.Content)
		log.Println("writing")

		if err = conn.WriteJSON(msg); err != nil {
			log.Println("Error while writing message: ", err)
			return
		}
	}

	log.Println("End connection")
}
