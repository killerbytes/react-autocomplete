import React from "react"
import { shallow, configure } from "enzyme"
import SearchBox from "./SearchBox"

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('<SearchBox />', ()=>{
  let props
  it('renders an input box', ()=>{
    const inputbox = shallow(<SearchBox {...props} />)
    expect(inputbox.find('input').length).toEqual(1)
  })

  it("should have default state", () => {
    const searchbox = shallow(<SearchBox {...props} />);
    expect(searchbox.state()).toEqual({ isVisible: false });
  });

  it("should open search results", () => {
    const searchbox = shallow(<SearchBox {...props} />);
    searchbox.find('input').simulate('change', {
      preventDefault: function(){}, 
      persist: function(){}, 
      target: {
        value: "killerbytes"
      }
    })
    expect(searchbox.state()).toEqual({isVisible: true});
  });

  beforeEach(()=>{
    props = {
      search: {
        repository: {
          result: {
            items: []
          }
        },
        user: {
          result: {
            items: []
          }
        }

      }
    }
  })
})


