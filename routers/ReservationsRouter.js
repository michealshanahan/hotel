const express = require('express')

const Reservation = require('../models/Reservations.js')
const reservationRouter = express.Router()


reservationRouter.get('/staff', (req, res, next) => {
    Reservation.find((err, reservation)=> {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(reservation)
    })
})

reservationRouter.route('/')

    .get(( req, res, next ) => {
        Reservation.find({ user: req.user._id }, ( err, user ) => {
            if ( err ) {
                res.status(500) 
                return next( err )
            } 
            return res.status( 200 ).send ( user )
        })
    })

    .post(( req, res, next ) => {
        const newReservation = new Reservation (req.body)
        newReservation.user = req.user._id
        newReservation.save(( err, reservation ) => {
            if ( err ) {
                res.status( 500 )
                return next( err )
            } 
        })
        return res.status( 201 ).send(newReservation )
    })


reservationRouter.route('/:_id')

    .get(( req, res, next ) => {
        const _id = req.params._id
        Reservation.findOne( {
            _id: _id,
            user: req.user._id                  
        }, ( err, reservation) => {
            if( err ) {
                res.status( 500 )
                return next( err)
            } else if( !reservation ){
                res.status( 404 )
                return next(new Error("Item not found"))
            }
            return res.send( reservation )
        })
    })

    .put(( req, res, next ) => {
        const _id = req.params._id
        Reservation.findOneAndUpdate({
                                        _id: req.params._id,
                                        user: req.user._id
        }, 
        req.body, {new: true}, (err, reservation) => {
            if ( err )  {
                res.status( 500 ) 
                return next( err )
            }
            return res.send( reservation )
        })
    })

    .delete(( req, res, next ) => {
        const _id = req.params._id
        Reservation.findOneAndRemove({
                                        _id: _id,
                                        user: req.user._id
        }, (err, reservation ) => {
            if(err)  {
                res.status( 500 )
                return next( err )
            }
            return res.send( reservation)
        })
    })





module.exports = reservationRouter