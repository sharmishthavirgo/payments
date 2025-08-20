import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class PaymentsServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // This is a stub for a hypothetical Lambda function that would serve the Next.js API.
    // In a real-world scenario, you would use a more sophisticated deployment method.
    const paymentsLambda = new lambda.Function(this, 'PaymentsLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('path/to/nextjs/build'), // The build output of the Next.js app
    });

    // Create an API Gateway to expose the Lambda function
    const api = new apigw.RestApi(this, 'PaymentsApi', {
      restApiName: 'Payments Service',
      description: 'Serves the pending payments API.',
    });

    const paymentsIntegration = new apigw.LambdaIntegration(paymentsLambda);
    const paymentsResource = api.root.addResource('payments');
    
    paymentsResource.addMethod('GET', paymentsIntegration);
  }
}