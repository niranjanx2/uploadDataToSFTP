USE [DB]
GO

/****** Object:  Trigger [dbo].[Updt_User_Email]    Script Date: 8/26/2020 4:30:34 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER <triggerName>
   ON <tableName>
   AFTER INSERT, UPDATE ---or delete anything
AS BEGIN
    SET NOCOUNT ON;    

    --- Insert into new table or update below eg
    UPDATE [User]
    SET username = I.username
    FROM [User]
    INNER JOIN Inserted I ON I.lUserId = U.lUserId                 
END
GO

ALTER TABLE <tablename> ENABLE TRIGGER <triggername>
GO


