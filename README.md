# React_simpleBoard_v2

CRUD Board updated from https://github.com/JieunKwon/React_create_simpleBoard

> What was updated?

1) Separated three components from App and used by exporting those

- App (Default)

- BoardForm

- BoardList

- BoardItem

2) Use shouldComponentUpdate Event when BoardForm updates

    shouldComponentUpdate(nextProps, nextState) {
      
      ...
      
      return true;
   }
 
