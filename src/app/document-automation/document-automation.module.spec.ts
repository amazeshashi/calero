import { DocumentAutomationModule } from './document-automation.module';

describe('DocumentAutomationModule', () => {
  let documentAutomationModule: DocumentAutomationModule;

  beforeEach(() => {
    documentAutomationModule = new DocumentAutomationModule();
  });

  it('should create an instance', () => {
    expect(documentAutomationModule).toBeTruthy();
  });
});
