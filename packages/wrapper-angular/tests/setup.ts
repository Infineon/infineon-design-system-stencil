import 'zone.js';
import 'zone.js/testing';
import '@angular/compiler'; // Required for JIT compilation
import { getTestBed } from '@angular/core/testing';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';

// Initialize Angular testing environment
getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting(),
);
