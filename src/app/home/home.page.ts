import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { LoginResponse } from '../interfaces/login';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  login = {} as LoginResponse;

  constructor(
    private tweetsService: TweetsService
  ) {}

  ngOnInit() {
  }

  async getTweets() {
    try {
      const tweets = await this.tweetsService.getTweets();
      console.log('tweets: ', tweets);
    } catch (err) {
      console.error(err);
    }
  }

  async getUsers() {
    try {
      const users = await this.tweetsService.getUsers();
      console.log('users: ', users);
    } catch (err) {
      console.error(err);
    }
  }

  async doLogin() {
    const body = {
      email: 'fabio@quok.app',
      password: 'alfio'
    };
    try {
      this.login = await this.tweetsService.login(body);
    } catch (err) {
      console.error(err);
    }
  }

  async createTweet() {
    try {
      const tweet = {
        tweet: 'Hello world!'
      };
      const userId = '5dbddb41278d5d19936a049b';
      await this.tweetsService.createTweet(this.login.accessToken, tweet, userId);
    } catch (err) {
      console.error(err);
    }
  }

  async getMe() {
    try {
      await this.tweetsService.me(this.login.accessToken);
    } catch (err) {
      console.error(err);
    }
  }

  async createUser() {
    const body: User = {
      email: 'fabio@quok.app',
      password: 'alfio',
      name: 'Fabio',
      surname: 'Manola'
    };
    try {
      const user = await this.tweetsService.createUser(body);
      console.log('user: ', user);
    } catch (err) {
      console.error(err);
    }
  }

}
