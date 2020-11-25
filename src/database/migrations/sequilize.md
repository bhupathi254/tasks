npx sequelize-cli model:generate --name Permissions --attributes name:string,status:enum

npx sequelize-cli model:generate --name Country --attributes name:string,countryCode:string,status:enum

npx sequelize-cli model:generate --name State --attributes name:string,countryId:integer,status:enum

npx sequelize-cli model:generate --name City --attributes name:string,stateId:integer,status:enum

npx sequelize-cli model:generate --name AdminUser --attributes firstName:string,lastName:string,email:string,phoneNumber:string,gender:enum,password:string,isAdmin:boolean,roleId:integer,userCode:string,dob:date,doj:date,status:enum,passwordResetToken:string,tokenExpiresAt:date,noOfWrongAttempts:integer,createdBy:integer

npx sequelize-cli model:generate --name Role --attributes name:string,roleCode:string,description:string,isPrivileged:boolean,status:enum,createdBy:integer,updatedBy:integer

npx sequelize-cli model:generate --name RolePermission --attributes roleId:integer,permissionId:integer,allowEdit:boolean,allowView:boolean,allowCreate:boolean,allowDelete:boolean,lastUpdatedBy:integer

npx sequelize-cli model:generate --name Service --attributes name:string,displayName:string,icon:string,bannerImage:string,status:enum,description:string,sequence:integer,callBackOption:enum,addOnsOptions:boolean,userFormInputs:boolean,layoutOption:enum,serviceType:enum,isVendorAvailable:boolean,isSubscribable:boolean,isUnsubscribable:boolean,isRenuewable:boolean,createdBy:integer,updatedBy:integer

npx sequelize-cli model:generate --name Property --attributes name:string,type:enum,description:string,prepageFilter:boolean,isApplicableToSpecificProduct:boolean,productFilter:boolean,displayOnCard:boolean,serviceType:enum,createdBy:integer

npx sequelize-cli model:generate --name PropertyOption --attributes propertyId:integer,icon:string,option:string,status:enum

npx sequelize-cli model:generate --name ServiceProperty --attributes propertyId:integer,serviceId:integer,status:enum

npx sequelize-cli model:generate --name UserMetaGroup --attributes name:string,status:enum,createdBy:integer

npx sequelize-cli model:generate --name UserMetaField --attributes title:string,description:string,groupId:integer,type:enum,status:enum,createdBy:integer

npx sequelize-cli model:generate --name UserFieldMetaOption --attributes userMetaFieldId:integer,value:string,status:enum

npx sequelize-cli model:generate --name ServiceUserMetaField --attributes userMetaFieldId:integer,serviceId:integer,status:enum

npx sequelize-cli model:generate --name SurveyCategory --attributes serviceId:integer,name:string,description:string,logo:string,status:enum,createdBy:integer,updatedBy:integer

npx sequelize-cli model:generate --name Question --attributes title:string,info:string,surveyCategoryId:integer,status:enum,parentQuestionId:integer,parentOptionId:integer,type:enum,createdBy:integer,updatedBy:integer

npx sequelize-cli model:generate --name QuestionOption --attributes questionId:integer,option:string,status:enum

npx sequelize-cli model:generate --name QuestionContent --attributes questionId:integer,optionId:integer,content:text,status:enum

npx sequelize-cli model:generate --name QuestionContent --attributes

npx sequelize-cli model:generate --name Vendor --attributes firstName:string,lastName:string,email:string,phoneNumber:string,gender:enum,password:string,vendorCode:string,dob:date,status:enum,passwordResetToken:string,tokenExpiresAt:date,noOfWrongAttempts:integer,providerName:string,companyName:string,customerSupportNumber:string,customerSupportEmail:string,gstNumber:string,logo:string,agreement:string,createdType:enum,createdBy:integer,updatedBy:integer

npx sequelize-cli model:generate --name VendorService --attributes vendorId:integer,serviceId:integer,status:enum

npx sequelize-cli model:generate --name VendorLocatioin --attributes vendorId:integer,countryId:integer,stateId:integer,cityId:integer,pincode:integer,latitude:double,longitude:double,type:enum,distanceInKms:double,status:enum,createdBy:integer

npx sequelize-cli model:generate --name Location --attributes latitude:double,longitude:double,address:text,cityId:integer,pincode:integer,addressType:enum,status:enum

npx sequelize-cli model:generate --name Customer --attributes firstName:string,lastName:string,email:string,phoneNumber:string,gender:enum,password:string,dob:date,status:enum,passwordResetToken:string,tokenExpiresAt:date,noOfWrongAttempts:integer,isMobileVerified:boolean,fbUserId:string,gUserId:string,fromAddress:integer,toAddress:integer,isSameAsToAddress:boolean,isFlexibleMovedate:boolean,movedate:date,billingAddress:integer,referralCode:string,referredBy:integer,createdBy:integer

npx sequelize-cli model:generate --name Family --attributes customerId:integer,firstName:string,lastName:string,age:integer,relation:enum

npx sequelize-cli model:generate --name Product --attributes name:string,serviceId:integer,vendorId:integer,productCode:string,image:string,status:enum,description:string,cgst:double,sgst:double,igst:double,availableAt:enum,createdType:enum,createdBy:integer,updatedBy:integer

npx sequelize-cli model:generate --name ProductProperty --attributes propertyId:integer,productId:integer,optionId:integer,value:string,numberValue:double,dateValue:date,maxValue:double,minValue:double,status:enum

npx sequelize-cli model:generate --name Price --attributes productId:integer,planDuration:double,planDurationType:enum,taskPrice:double,vendorPrice:double,price:double,status:enum,planType:enum

npx sequelize-cli model:generate --name Addon --attributes productId:integer,name:string,price:double,status:enum

npx sequelize-cli model:generate --name ProductLocation --attributes productId:integer,countryId:integer,stateId:integer,cityId:integer,pincode:integer,latitude:double,longitude:double,type:enum,distanceInKms:double,status:enum,createdBy:integer

npx sequelize-cli model:generate --name Coupon --attributes name:string,code:string,startDate:date,endDate:date,status:enum,discount:double,discountType:enum,icon:string,createdBy:integer,updatedBy:integer

npx sequelize-cli model:generate --name Order --attributes customerId:integer,price:double,paymentStatus:boolean,razorPayCode:string,responseMessage:string,noOfItems:integer,couponId:integer,status:enum

npx sequelize-cli model:generate --name OrderProduct --attributes orderId:integer,productId:integer,taskPrice:double,vendorPrice:double,status:enum,type:enum,cgst:double,sgst:double,igst:double,couponCode:string,discountAmount:double

npx sequelize-cli model:generate --name ServiceUserFormSubmissions --attributes orderProductId:integer,userMetaFieldId:integer,optionId:integer,value:string,numberValue:double,dateValue:date,type:enum

npx sequelize-cli model:generate --name SurveySubmission --attributes title:string,customerId:integer,surveyCategoryId:integer,questionContentId:integer,status:enum

npx sequelize-cli model:generate --name SurveyQuestionSubmission --attributes surveySubmissionId:integer,questionId:integer,optionId:integer,status:enum

npx sequelize-cli model:generate --name Request --attributes customerId:integer,type:enum,orderProductId:integer,fromAddress:integer,toAddress:integer,vendorId:integer,status:enum

npx sequelize-cli model:generate --name Subscription --attributes productId:integer,customerId:integer,status:enum,locationId:integer,vendorId:integer,startDate:date,endDate:date

npx sequelize-cli model:generate --name Cart --attributes customerId:integer,productId:integer,fromAddress:integer,toAddress:integer,cartType:enum,status:enum

npx sequelize-cli model:generate --name Blogs --attributes title:string,featuredImage:string,content:text,status:enum,tags:text,serviceId:integer,metaKeywords:text,metaDescription:text,titleTag:text,createdBy:integer

npx sequelize-cli model:generate --name BulkUploadLog --attributes path:string,errorPath:string,destination:enum,successfullRecordCount:integer,totalRecordCount:integer,createdBy:integer

npx sequelize-cli model:generate --name UserChecklist --attributes customerId:integer,shiftDate:date,fromAddress:integer,toAddress:integer,status:enum,

npx sequelize-cli model:generate --name ChecklistService --attributes userChecklistId:integer,serviceId:integer,status:enum

npx sequelize-cli model:generate --name NewsLetter --attributes email:string,status:enum

npx sequelize-cli model:generate --name OrderAddon --attributes addOnId:integer,price:double,orderProductId:integer

npx sequelize-cli model:generate --name ServiceRequest --attributes productId:integer,serviceName:string,customerId:integer,location:integer,status:enum

npx sequelize-cli model:generate --name Ticket --attributes customerId:integer,message:text,status:enum,createdBy:integer,resolvedBy:integer

npx sequelize-cli model:generate --name UserMetaValue --attributes customerId:integer,userMetaFieldId:integer,optionId:integer,value:string,numberValue:double,dateValue:date

npx sequelize-cli model:generate --name VendorBillingAddress --attributes vendorId:integer,latitude:double,longitude:double,Dno:string,address:text,cityId:integer,pincode:integer,status:enum

npx sequelize-cli model:generate --name UnitMaster --attributes unit:string,status:enum



values: ['active', 'inactive', 'deleted'],
comment: `'active', 'inactive', 'deleted'`


