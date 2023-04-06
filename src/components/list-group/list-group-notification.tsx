import { Component, h, Element, Prop, State} from '@stencil/core';

@Component({
  tag: 'ifx-list-notification',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class ListGroupNotification {
  @Element() el;
  @Prop() title: string = ""
  @Prop({mutable: true}) isFlush: boolean = false;
  @Prop() created: any;
  @State() postTime: any;
  @State() shownTime: string;
  @Prop() elapsedTime: string = ""


  setDisplayTime(seconds, minutes, hours, days) { 
    if(seconds <= 60) { 
      this.shownTime = `Just now`
    } else if(minutes <= 60) {   
      this.shownTime = `${minutes} min. ago`
    } else if(hours <= 24) { 
      this.shownTime = hours > 1 ? `${hours} hr. ago` : `${hours} hrs. ago`
    } else if (days) { 
      this.shownTime = hours < 48 ? `1 day ago` : `${days} days ago`
      if(hours > 168) { 
        this.shownTime = `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
      }
    }
  }

  stringToDate(dataString) {
    if (!dataString) return null;
    let dateParts = dataString.split("-");
    let timeParts = dateParts[2].split("T")[1].split(":");
    dateParts[2] = dateParts[2].split("T")[0];
    return new Date(+dateParts[0], dateParts[1] - 1, +dateParts[2], timeParts[0], timeParts[1], timeParts[2]);
  }

  getElapsedTime(time) { 
    let date = this.stringToDate(time)
    let miliseconds = Date.now() - date.getTime()
    let seconds = Math.floor(miliseconds / 1000);
    let minutes = Math.floor(miliseconds / 60000);
    let hours = Math.floor(minutes / 60);
    let days =  Math.floor(hours/24);
    this.setDisplayTime(seconds, minutes, hours, days)
  }

  setTimeInterval(time) {
    this.postTime = setInterval(() => {
      this.getElapsedTime(time)
    }, 1000)
  };
  


  componentWillLoad() { 
    //this.getElapsedTime(this.created)
    //this.setTimeInterval(this.created) //if time update on refresh, delete this
    const ifxListGroup = this.el.closest('ifx-list-group')
    if(ifxListGroup.flush) { 
      this.isFlush = true;
    } else this.isFlush = false;
  }


  render() {
    return (
      <div class={`list-group-notification ${this.isFlush ? 'flush' : ""}`}>
        <div class="heading__section">
          <h6 class="heading__section-title">{this.title}</h6>
          <div class="heading__section-time">{this.elapsedTime}</div>
        </div>
        <div class="description__section">
          <slot />
        </div>
      </div>
    );
  }
}
