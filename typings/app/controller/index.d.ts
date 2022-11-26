// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/controller/test';

declare module 'egg' {
  interface IController {
    test: ExportTest;
  }
}
