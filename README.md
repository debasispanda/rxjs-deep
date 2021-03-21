# rxjs-deep

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/rxjs-deep)

# Glossary

- [Observable](#observable)
- [Observer](#observer)
- [Operators](#operators)
  - [Creation Operators](#creation-operators)
    - [ajax](#ajax)
    - [bindCallback](#bindcallback)
    - [bindNodeCallback](#bindnodecallback)
    - [defer](#defer)
    - [empty](#empty)
    - [from](#from)
    - [fromEvent](#fromEvent)
    - [fromEventPattern](#fromEventPattern)
    - [generate](#generate)
    - [interval](#interval)
    - [of](#of)
    - [range](#range)
    - [throwError](#throwError)
    - [timer](#timer)
    - [iif](#iif)

## Observable
[Observables](/src/observable.ts) are lazy Push collections of multiple values. They use Push protocols to communicate.

> Push and Pull are two different protocols which is used between a Producer and Consumer for communication.


## Observer
An [Observer](/src/observer.ts) is a consumer of values delivered by an Observable. Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete.

## Operators
Operators are functions and they two types.

1. **Pipable operators**
    - Can be piped to observables using `pipe` method.
    - These are mainly pure functions which takes observable input and return another observable as output.
    - They do not change the original input observable.
    - Subscribing to the output Observable will also subscribe to the input Observable.
      
      e.g: `map`, `tap`, `switchMap` etc
2. **Creation operators**
    - Creation Operators are the other kind of operator, which can be called as standalone functions to create a new Observable.

      e.g: `from`, `of`
    
### Creation Operators

#### ajax

#### bindCallback

#### bindNodeCallback

#### defer

#### empty

#### from

#### fromEvent

#### fromEventPattern

#### generate

#### interval

#### of

#### range

#### throwError

#### timer

#### iif
