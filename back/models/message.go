package models

type Message struct {
	// user id
	From string `json:"from"`

	// message
	Content string `json:"content"`

	// unix timestamp of message
	// real timestamp is generated by server at message arrival time
	Timestamp int `json:"timestamp"`
}