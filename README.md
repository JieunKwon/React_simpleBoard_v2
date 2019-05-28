# React_simpleBoard_v2

CRUD Board updated from https://github.com/JieunKwon/React_create_simpleBoard

> What was updated?

1) Separated three components from App and used by importing and exporting those

- App (Default)

    import BoardForm from './BoardForm';
    
    import BoardItem from './BoardItem';

- BoardForm

    export default BoardForm;

- BoardItem

    export default BoardItem;


2) Use shouldComponentUpdate Event when BoardForm updates

    shouldComponentUpdate(nextProps, nextState) {
      
      ...
      
      return true;
      
   }
 

3) Make refrences using ref when data selected to edit


            <form onSubmit={this.handleSubmit} class="BoardForm-form">
             <table><tr><td>
                  
                  Name:  </td><td><input size="30" name="brdwriter" value={this.state.brdwriter} onChange={this.handleChange}/>
                
                </td></tr>
                <tr><td>
                    
                  Title:  </td><td><input size="30"  name="brdtitle" value={this.state.brdtitle} onChange={this.handleChange}/>

                <button type="submit">Save</button>
                </td></tr>
            </table>
            </form>
            
            
            => 
            
            <input placeholder="name" ref={node => this.brdwriter = node}/> 
            
            <input placeholder="title" ref={node => this.brdtitle = node}/> 
            
             

 

