import React from 'react';
import md5 from 'md5';
import { Redirect } from 'react-router';
import {Header} from 'semantic-ui-react';


class NewLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value:'',
          pw:'',
          newslink:'',
          redirect:''
      };
  
  
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleChange2(event) {
      this.setState({pw: event.target.value});
    }
    handleChange3(event) {
      this.setState({newslink: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      sessionStorage.setItem('username', this.state.value);
      sessionStorage.setItem('intrapassword', md5(this.state.pw));
      sessionStorage.setItem('newslink', this.state.newslink);
      this.setState({value:'',pw:'',newslink:''});
      this.setState({redirect: true});
      
    
    }

  
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/news" />;
          }
      return (
        <div>
        <Header className="header-container" as='h3' textAlign='center' block>
          <span className='heading'>FlexiLearn</span>
        </Header>
        <form class="ui form" onSubmit={this.handleSubmit} >        
          <div class="field">
          <label>Name</label>
            <input type="text" name="Name" placeholder="Name" value={this.state.value} onChange={this.handleChange} />
          </div>
          <div class="field">
          <label>Passwort</label>
            <input type="password" name="pw" placeholder="Passwort" value={this.state.pw} onChange={this.handleChange2} />
          </div>
          <div class="field">
          <label>Felix RSS FEED URL</label>
            <input type="text" name="newslink" placeholder="RSS URL" value={this.state.newslink} onChange={this.handleChange3} />
          </div>
          <button class="ui button" type="submit" value="Login">Login</button>
        </form>
        </div>
      );
    }
  }
  export default NewLogin;