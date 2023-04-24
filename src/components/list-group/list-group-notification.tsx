import { Component, h, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'ifx-list-notification',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class ListGroupNotification {
  @Element() el;
  @Prop() title: string = ""
  @Prop() isFlush: boolean = false;
  @Prop() creationTime: any;
  @State() postTime: number;
  @State() shownTime: string;

  setDisplayTime(seconds, minutes, hours, days) {
    if (seconds <= 60) {
      this.shownTime = `Just now`
    } else if (minutes <= 60) {
      this.shownTime = `${minutes} min. ago`
    } else if (hours <= 24) {
      this.shownTime = hours > 1 ? `${hours} hr. ago` : `${hours} hrs. ago`
    } else if (days) {
      this.shownTime = hours < 48 ? `1 day ago` : `${days} days ago`
      if (hours > 168) {
        this.shownTime = `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`
      }
    }
  }

  stringToDate(dataString) {
    if (!dataString) return null
    let dateParts = dataString.split("/");
    if (dateParts[2]) {
      if (dateParts[2].split(" ")[1]) {
        let timeParts = dateParts[2].split(" ")[1].split(":");
        dateParts[2] = dateParts[2].split(" ")[0];
        return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], timeParts[0], timeParts[1], timeParts[2]);
      }
    }
  }

  getElapsedTime(time) {
    let date = this.stringToDate(time)
    if (date) {
      let miliseconds = Date.now() - date.getTime()
      let seconds = Math.floor(miliseconds / 1000);
      let minutes = Math.floor(miliseconds / 60000);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
      this.setDisplayTime(seconds, minutes, hours, days)
    }
  }

  setTimeInterval(time) {
    this.postTime = window.setInterval(() => {
      this.getElapsedTime(time)
    }, 1000)
  };

  componentWillLoad() {
    this.getElapsedTime(this.creationTime)
    this.setTimeInterval(this.creationTime) //if time update on refresh, delete this & clear interval
    const ifxListGroup = this.el.closest('ifx-list-group')
    if (ifxListGroup.flush) {
      this.isFlush = true;
    } else this.isFlush = false;
  }

  disconnectedCallback() {
    window.clearInterval(this.postTime);
  }

  render() {
    return (
      <div class={`list-group-notification ${this.isFlush ? 'flush' : ""}`}>
        <div class="heading__section">
          <h6 class="heading__section-title">{this.title}</h6>
          <div class="heading__section-time">{this.shownTime}</div>
        </div>
        <div class="description__section">
          <slot />
        </div>
      </div>
    );
  }
}
