import React from 'react'
import { Card, Carousel } from 'react-bootstrap'

export default function Books (props) {
  const books = props.books
  return (
    <Card style={{ marginBottom: 10 }}>
      <Card.Header className='text-white' style={{ backgroundColor: '#003d5b' }}>
        <Card.Title>2019 Books</Card.Title>
      </Card.Header>
      <Card.Body>
        <Carousel
          indicators={false}
        >
          {books.map((book, key) => (
            <Carousel.Item key={key}>
              <Card>
                <Card.Img style={{ height: 400 }} src={book.cover} />
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card.Body>
    </Card>
  )
}
