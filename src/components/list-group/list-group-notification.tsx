import { Component, h, Element, Prop, State} from '@stencil/core';

@Component({
  tag: 'ifx-list-notification',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class ListGroupNotification {
  @Element() el;
  @Prop() title: string = ""
  @Prop() isFlush: boolean = false;
  @State() postTime: any;
  @State() elapsedTime: number = 0;
  @State() shownTime: string;


  millisToMinutesAndSeconds(seconds) {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(seconds / 3600);
    let days = Math.floor(seconds / 86400);
    if(minutes < 60) { 
      return minutes
    } else if (hours > 0) { 
      return hours
    } else if (days > 0) { 
      return days;
    }
  }

  setTimeInterval() {
    this.postTime = setInterval(() => {
      this.elapsedTime += 1;
      if(this.elapsedTime <= 60) { 
        this.shownTime = `${this.elapsedTime} sec. ago`
      } else if(this.elapsedTime > 60) {   
        let getMinutes = this.millisToMinutesAndSeconds(this.elapsedTime)
        this.shownTime = `${getMinutes} min. ago`
      } else if(this.elapsedTime > 3600) { 
        let getHours = this.millisToMinutesAndSeconds(this.elapsedTime)
        this.shownTime = getHours > 1 ? `${getHours} hr. ago` : `${getHours} hrs. ago`
      } else if (this.elapsedTime > 86400) { 
        let getDays = this.millisToMinutesAndSeconds(this.elapsedTime)
        this.shownTime = getDays > 1 ? `${getDays} day ago` : `${getDays} days ago`
      }
    }, 1000)
  };
  


  componentWillLoad() { 
    this.setTimeInterval()
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
          <div class="heading__section-time">{this.elapsedTime < 10 ? 'Just now' : this.shownTime}</div>
        </div>
        <div class="description__section">
          <slot />
        </div>
      </div>
    );
  }
}
